import cloudinary from 'cloudinary';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';
require('dotenv').config();

cloudinary.config({ 
    cloud_name: 'duoozgvep', 
    api_key: process.env.API_KEY_CLOUD, 
    api_secret: process.env.API_SECRET 
  });

describe('pruebas en fileUpload', () => {
    
    test('Carga un archivo y retorna un URL', async(done) => {

       const resp= await fetch('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'); 
    
       const blob= await resp.blob();

       const file= new File([blob], 'foto.png');

       const url= await fileUpload(file);

        expect(typeof url).toBe('string');

        //delete image
        const segments=url.split('/');
        const imageId=segments[segments.length-1].replace('.jpg','');
        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });
    });
    
    test('retornar error', async() => {

        const file= new File([], 'foto.png');
 
        const url= await fileUpload(file);
 
         expect(url).toBe(null);
     });
     
})
