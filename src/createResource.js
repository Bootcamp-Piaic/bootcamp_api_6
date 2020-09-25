
async function Fetch_data(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
    const data =await response.json()
    return data
}
export default function createResource ()  {
    
    let status='Loading'
    let result
    let suspender =Fetch_data().then(
        data=>{
            status='success'
            result=data
        },
        error=>{
            status='error'
            result=error
        }
    )
    return {
        read(){
        if (status==="Loading"){
            throw suspender
        }else if(status==="error"){
            throw result
        }else if (status==="success"){
            return result
        }
        }
    }
}
