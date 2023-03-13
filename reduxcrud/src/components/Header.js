import {useSelector} from 'react-redux'

const Header=()=>{
    const result=useSelector((state)=>state.cartData)
    return(
        <div>
            <div>
                <span>{result.length}</span>
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default Header