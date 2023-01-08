import axios from "axios" //npm untuk API

const url = 'https://rz-app.adaptable.app/' 

export const setForm = (formType, formValue) =>{
return {type: 'SET_FORM_DATA', formType, formValue}
}


export const setImgPreview = (payload) => {
return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);
    
    axios.post(url + '/v1/blog/post', data, {
      headers: {
      'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
      console.log('post success: ', res);
      alert('post sucsess')
    })
      .catch(err => {
      console.log('err: ', err);
      alert('post error')
    })
}

export const updateToAPI = (form,id) => {
    const data = new FormData();
    data.append  ('title', form.title);
    data.append  ('body', form.body);
    data.append  ('image', form.image);
    
    axios.put(url + `/v1/blog/post/${id}`, data, {
      headers: {
      'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
      console.log('update success: ', res);
      alert('update sucsess')
    })
      .catch(err => {
      console.log('err: ', err);
      alert('update error')
    })
}