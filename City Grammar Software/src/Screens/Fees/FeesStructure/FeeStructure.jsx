import React from 'react'

const FeeStructure = () => {
  return (
    <>
       <div className="text-center mt-4 mb-4 stdregis">
        <div className='pb-3'>
          <h1>Fees Structure</h1>
         <div className='pb-4 d-flex justify-content-end  me-4'>
         </div>
        </div>

        <div className='mt-5 ms-md-5 ps-md-5 fs-5'>
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Monthly Fee</th>
                  <th scope="col">Yearly Fee</th>
                </tr>
              </thead>
              <tbody>
              
                
                   {Array.from({ length: 10 }).map((_, i) => (
                        <tr key={i}>
                            <th scope="col">{i + 1}</th>
                            <th scope="col">{500 + (i + 2)  * 100}</th>
                            <th scope="col">{500 + (i + 2)  * 1000}</th>
                                    
                        </tr>
                    
                  ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeeStructure
