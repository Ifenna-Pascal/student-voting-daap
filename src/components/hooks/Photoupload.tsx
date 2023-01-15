/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { useContractHook } from '../../context/contract.context';
import { addDataToIPFS } from '../../services/ipfs';
import Button from '../../ui/Button';

function Photoupload({onImageUploaded}: any) {
    const [image, setImage] = useState<any>();
    const contract = useContractHook();
    const convertToBuffer = async (reader: { result: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>; }) => {
       
        const buffer = await Buffer.from(reader.result);
        return buffer;
      };
      const onDrop = useCallback(
        (acceptedFiles: any[]) => {
          const uploadedImage = acceptedFiles[0];
          if (!uploadedImage) return;
    
          uploadedImage["preview"] = URL.createObjectURL(uploadedImage);
          setImage(uploadedImage);
    
          let reader = new window.FileReader();
          reader.readAsArrayBuffer(uploadedImage);
          reader.onloadend = async () => {
            const bufferImage = await convertToBuffer(reader as any);
            const ipfsHash = await addDataToIPFS(bufferImage);
            contract?.setIPFS(ipfsHash);
            console.log("ipfsHash", ipfsHash);
          };
        },
        [onImageUploaded]
      );

      const thumbs = image && (
        <img className="square-cirle w-[500px] rounded-lg mb-3 h-[300px] object-center " src={image.preview} alt={image.name} />
      );
      
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    // accept: "image/jpeg, image/png",
  });

  return (
    <div {...getRootProps()} className="mb-3">
      <input {...getInputProps()} />
      {thumbs}

      {isDragActive ? (
        <Button name='Drop' className='bg-red-400' />
      
      ) : (
        <Button name="Drag and drop profile pic" className='bg-gray-400 text-white font-popins text-[14px] rounded-md px-6 py-3 ' />
      )}
    </div>
  )
}

export default Photoupload