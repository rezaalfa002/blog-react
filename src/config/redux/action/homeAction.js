import axios from "axios";
const url = 'https://rz-app.adaptable.app/' //backend yang sudah di deloy ke site

export const setDataBlog = (page) => {

    return (dispatch) => {
        
    axios.get(url + `/v1/blog/posts?page=${page}&perPage=2`)//nyalain dulu backendnya
    .then(result => {
   
    const responseAPI = result.data;
    console.log('data api : ', responseAPI)
    dispatch({type: 'UPDATE_DATA_BLOG', payload : responseAPI.data})
    dispatch({
            type: 'UPDATE_PAGE',
            payload: {
                currentPage: (responseAPI.current_page),
                totalPage: Math.ceil((responseAPI.total_data / responseAPI.per_page))
            }
        })

    })
    .catch(err => {
      console.log('data err : ', err );
    })

    }
 
    }