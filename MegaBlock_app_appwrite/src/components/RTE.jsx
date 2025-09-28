
import React from 'react'
import { Controller } from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
export default  function RTE({
    name, control, lable, defaultValue = ""
}) {
  return (
    <div className='w-full'>
      {lable && <lable className = 'inline-block mb-1 pl-1'>
        {lable}</lable>}
        <Controller
        name ={name || "content"}
        control={control}
        render ={({field :onChange})=>(
            <Editor
            initialValue = {defaultValue}
             apiKey='xp5gm9ahgzgkudg5s9a3sr1hi4b7a38u1zkg3x4eux5xg4r3'
            init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange = {onChange}
            />
                
        )}
        />
            
    </div>
  )
}


