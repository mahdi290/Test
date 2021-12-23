import React from 'react'
//*bootsrap alert 
function Error({message}) {
    return (
        <div>
  
            <div class="alert alert-danger" role="alert">
                {message}
            </div>

        </div>

    )

}
export default Error