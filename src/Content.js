import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) =>{
    return(
        (items.length) ? 
            <main>
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
           </main>
        : <main>No courses found</main>
           
    )
}

export default Content