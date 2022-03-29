import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function ProductImageDropBox  ({setProductImage, ...props}){
    const onDrop = useCallback(acceptedFiles => {
        const path = acceptedFiles[0] ;
        
        setProductImage(URL.createObjectURL(path))
    }, [])
    const {
        getRootProps, getInputProps,
    } = useDropzone({ accept: 'image/jpeg,image/jpg,image/png', maxFiles:1, onDrop });

function workingThing(){
    console.log("look")
}

    return( 
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} onChange={workingThing} />
                <p>Product Image Upload</p>
            </div>
        </>
    )
}

export default ProductImageDropBox