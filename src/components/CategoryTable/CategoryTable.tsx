import './CategoryTable.css'

interface propType{
    heading?: string;
    list_title?: string;
    list_image?: string;
    list_desc?: string;
}

const CategoryTable = ({ heading, list_title, list_image, list_desc }: propType) => {
  return (
    <div className='category_table_main'>
      <div className="table">
        <div className="heading">
            <h4>{heading}</h4>
        </div>
        <div className="list">
            <div className="list_title">
                <p style={{color:"#10a37f"}}>{list_desc}</p>
                <p>{list_title}</p>
            </div>
            <div className="list_image">
                <img src={list_image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryTable
