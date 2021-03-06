// snipped rafc

import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

    // const categories = ['Logan', 'DeadPool', 'Thor']
    const [categories, setCategories] = useState(['Logan'])

    /*     const handleAdd = () => {
            setCategories([...categories, 'Dr. Strange'])
            setCategories(cat => [...cat, 'Dr.Strange'])
        } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>

    )

}

export default GifExpertApp