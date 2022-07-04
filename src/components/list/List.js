import Item from './Item'
function List(){
    return (
    <>

      <ul>
            <Item marca="Ferrari" ano_lancamento={1902} />
            <Item marca="Fiat" ano_lancamento={1927} />
            <Item marca="Renault" ano_lancamento={1988} />
            <Item />
      </ul>        
    </>
    )
}
 export default List