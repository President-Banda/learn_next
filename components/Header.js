import headerStyles from '../styles/Header.module.css'
const Header =()=>{
    // const x = 2;
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
            {/* You might want to use this type of styling for thinsg like conditionals */}
            {/* <style jsx>
                {`
                    .title{
                        color: ${ x>3? 'red': 'blue'};
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header