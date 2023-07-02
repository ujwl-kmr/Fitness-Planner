import React from 'react'
import "../admin/Admin.css"
function Admindashboard() {
  return (
    <>
    <div className='admin'>

<div className='adminHeader'>
    <h3>
        Admin Dashboard
    </h3>
</div>
 
    <div className='adminContent'>
            <div className="userName">
              <p>Client Name:</p>  Sudipta
            </div>
        <div className='allreq'>
        <div className='left'>
            
        <div className='gen'>

            <h3>
                Gender:
            </h3>
            <h5>Male</h5>
        </div>
        <div className='age'>


            <h3>
                Age:
            </h3>
            <h5>20</h5>
        </div>
        <div className='height'>

            <h3>
                height:
            </h3>
            <h5>10 foot</h5>
        </div>
        <div className='weight'>

            <h3>
                weight:
            </h3>
            <h5>100 kg</h5>
        </div>
        <div className='active'>

            <h3>
                Active:
            </h3>
            <h5>“Fit” – I’m Not Concerned With Being Super Lean And Muscular. I Just Want To Look Fit And Healthy.</h5>
        </div>
        <div className='fat'>

            <h3>
                Fat:
            </h3>
            <h5>900000</h5>
        </div>
        </div>
        <div className="right">

        <div className='situation'>

            <h3>
                Situtation:
            </h3>
            <h5>“Fit” – I’m Not Concerned With Being Super Lean And Muscular. I Just Want To Look Fit And Healthy.</h5>
        </div>
        <div className='phys'>

            <h3>
            physique:
            </h3>
            <h5>“Fit” – I’m Not Concerned With Being Super Lean And Muscular. I Just Want To Look Fit And Healthy. </h5>
        </div>
        <div className='time'>

            <h3>
                Time:
            </h3>
            <h5>3000</h5>
        </div>
        <div className='Place'>

            <h3>
                Place:
            </h3>
            <h5>lundpur</h5>
        </div>
        <div className='prevent'>

            <h3>
                Preventing:
            </h3>
            <h5>No option</h5>
        </div>
        <button>
            Upload
        </button>
        </div>

        </div>
    </div>


</div>
    </>
  )
}

export default Admindashboard