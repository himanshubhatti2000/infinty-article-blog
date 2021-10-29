import React,{useState,useContext} from 'react';
import {useQuill} from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import storeContext from '../../Context/storeContext';



const Editor = () => {
 const context = useContext(storeContext);
 let ArticleContent=context.store.dashboard.createArticle.articleContent
    const {quill,quillRef}=useQuill()



    console.log(document.getElementsByClassName("ql-editor ql-blank"))
    React.useEffect(() => {
        if (quill) {
          //console.warn(quill.getContents())
          quill.clipboard.dangerouslyPasteHTML( ArticleContent)
          var length = quill.getLength()
            quill.setSelection(length, 0)
            console.warn(length)
          quill.on('text-change', () => {
            console.log(quill.container.innerText,"qUILLLLLLLLLLL")
            ArticleContent=quill.root.innerHTML
            console.log(ArticleContent)
            //console.log(context.store)
            //console.log(quill.root.innerHTML)
            //console.log( quill.root.innerHTML)
            //setArticleState({article: "hey"})
            //console.log(articleState,quill.root.innerHTML)
            /*
            context.setStore(prevStore=>({
              dashboard: {
                  ...prevStore.dashboard,
                  createArticle: {
                      ...prevStore.dashboard.createArticle,
                      articleContent: quill.root.innerHTML
                  }
              }
          }))*/

          console.log(context.store)
          });
        }
        return ()=>{
          console.log(ArticleContent,"content")
          context.setStore(prevStore=>({
            dashboard: {
                ...prevStore.dashboard,
                createArticle: {
                    ...prevStore.dashboard.createArticle,
                    articleContent: ArticleContent
                }
            }
        }))

        }
      }, [quill])
    return (
        <div className="editor">
            <div ref={quillRef}/>
        </div>
    );
}

export default Editor;
