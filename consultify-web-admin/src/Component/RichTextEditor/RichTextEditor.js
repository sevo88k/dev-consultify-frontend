// import React, { useEffect, useState } from "react";
// import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const RichTextEditor = ({ givenContent, faqdetails ,setFieldValue}) => {
//   const [editorState, setEditorState] = useState();

//   const onEditorStateChange = (newEditorState) => {
//     setEditorState(newEditorState);
//     let blogContent = JSON.stringify(
//       convertToRaw(newEditorState.getCurrentContent())
//     );
//     setFieldValue(blogContent)

//     console.log(newEditorState.getCurrentContent(),"editorStateeditorStateeditorState")
//   };

//   useEffect(() => {
//     if (givenContent && faqdetails && !editorState) {
    
//       const contentState = convertFromRaw(JSON.parse(givenContent));
//       setEditorState(EditorState.createWithContent(contentState));
//     }
//   }, [givenContent]);

//   return (
//     <div>
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={onEditorStateChange}
//       />
//     </div>
//   );
// };

// export default RichTextEditor;




import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = ({ givenContent,faqdetails, setFieldValue }) => {
  const [editorState, setEditorState] = useState();


  // const onEditorStateChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  //   const content = JSON.stringify(convertToRaw(newEditorState.getCurrentContent()));
  //   setFieldValue(content); 
  // };

    const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    let blogContent = JSON.stringify(
      convertToRaw(newEditorState.getCurrentContent())
    );
    setFieldValue(blogContent)

    console.log(newEditorState.getCurrentContent(),"editorStateeditorStateeditorState")
  };


 
  // useEffect(() => {
  //   if (givenContent) {
  //     try {
  //       const contentState = convertFromRaw(JSON.parse(givenContent));
  //       setEditorState(EditorState.createWithContent(contentState));
  //     } catch (error) {
  //       console.error("Failed to parse given content:", error);
  //     }
  //   }
  // }, [givenContent]);

    useEffect(() => {
    if (givenContent && faqdetails && !editorState) {
    
      const contentState = convertFromRaw(JSON.parse(givenContent));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [givenContent]);


  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result; 
        resolve({ data: { link: imageUrl } }); 
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file); 
    });
  };


  const uploadVideoCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const videoUrl = reader.result; 
        resolve({ data: { link: videoUrl } }); 
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file); 
    });
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
            previewImage: true,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          },
          embedded: {
            defaultSize: { height: "auto", width: "100%" },
          },
          video: {
            uploadCallback: uploadVideoCallBack,
            previewImage: true,
            inputAccept: "video/mp4,video/webm,video/ogg",
          },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
