// PDF预览公共组件
<template>
    <div id="pdfViewCanvas" ref="pdfViewCanvas">
        <canvas v-for="page in numPages" 
            :ref="'pdf-canvas' + page"
            :id="'pdf-canvas'+page" 
            :key="page"></canvas>
        <!-- <iframe :src="'/static/pdf/web/viewer.html?file=' + urlLink " frameborder="0" width="100%" height="100%"></iframe> -->
    </div>
</template>
<script>
    // import pdf from '/static/pdf/build/pdf.js'
    import pdf from 'pdfjs-dist'
    export default {
        name: 'pdf-component', 
        props: {
            //pdf文件链接
            urlLink: {
				type: String,
                default: '',
			},
        },
        data (){
            return {
                screenWidth: document.body.clientWidth,
                timer: false,
                numPages: 1,  //pdf总页码
            }
        },
        mounted(){
            let self = this;
            this.$nextTick(()=>{
                this._loadFile()
            })
            window.addEventListener("resize", function() {
               return (() => {
                    window.screenWidth = document.body.clientWidth;
                    self.screenWidth = window.screenWidth;
               })();
            });
        },
        created(){
        },
        methods: {
            //初始化pdf页面
            _renderPage (pdf,pageNumber,container) { //获取pdf
                let self = this;
                pdf.getPage(pageNumber).then((page) => {
                    // let canvas = document.getElementById('pdf-canvas' + pageNumber)
                    let canvas = this.$refs['pdf-canvas' + pageNumber][0];
                    let scale = (container.offsetWidth/page.view[2]);
                    let ctx = canvas.getContext('2d');
                    let viewport = page.getViewport(scale);
                    canvas.width= viewport.width
                    canvas.height= viewport.height
                    // container.appendChild(canvas)
                    var renderContext = {
                        canvasContext: ctx,
                        transform: [1, 0, 0, 1, 0, 0],
                        viewport: viewport,
                        intent: 'print'
                    };
                    page.render(renderContext).then(() => {
                        pageNumber +=1
                        if(pageNumber<=self.numPages) {
                            this._renderPage(pdf,pageNumber,container)
                        }
                    })
                })
            },
            //读取pdf文件
            _loadFile () {
                let self = this;
                if(!this.urlLink) return;

                this.$refs.pdfViewCanvas.scrollTop =0
                // let url = 'http://image.cache.timepack.cn/nodejs.pdf'  //外链
                let url = '/static/js/pdf/demo.pdf'  //本地

                let pdfjsLib = pdf;
                pdfjsLib.PDFJS.workerSrc = '/node_modules/pdfjs-dist/build/pdf.worker.js'
                let loadingTask = pdfjsLib.getDocument(this.urlLink);

                this.numPages = 0;  // 窗口变化时，清空视图
                loadingTask.promise.then((pdf) =>{
                    console.log("===PDF===",pdf)
                    self.numPages = pdf.numPages;       //pdf总页码
                    let container = this.$refs.pdfViewCanvas;  

                    let pageNumber = 1;     //当前页码
                    self._renderPage(pdf,pageNumber,container)
                }, function (reason) {
                    console.log({'message': reason});
                });
            }
        },
        watch: {
            //监听视口变化
            screenWidth (val) {
                let self = this;
                if (!this.timer) {
                    this.screenWidth = val;
                    this.timer = true;
                    setTimeout(function () {
                        // console.log(self.screenWidth)
                        self._loadFile()
                        self.timer = false
                    }, 400)
                }
            }
        }
    }
</script>

<style scoped>
#pdfViewCanvas {
    width: 100%;
    height: 100%;
}
</style>


