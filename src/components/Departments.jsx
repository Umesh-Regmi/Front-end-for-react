import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api/categoryapi'

const Departments = () => {
    let [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])

    return (
        <>
            <h3 className='text-center mt-3 text-decoration-underline '>Departments</h3>

            <div className="card-group">
                {
                    categories?.map(category => {
                        return <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{category.category_name}</h5>
                                <p className="card-text"><small className="text-body-secondary">Last updated {category.updatedAt}</small></p>
                            </div>
                        </div>
                    })
                }


            </div>

        </>
    )
}

export default Departments