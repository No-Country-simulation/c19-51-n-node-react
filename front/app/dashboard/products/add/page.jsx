import styles from "./add.products.module.css" 

const AddproductPage = () =>{
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" name="title" id="" placeholder="title" required />
          <select name="cat" id="cat">
            <option value="kitchen">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input type="number" placeholder="price" name="price"  />
          <input type="number" placeholder="stock" name="stock"  />
          <input type="text" placeholder="color" name="color"  />
          <input type="text" placeholder="size" name="size"  />
          <input
          type="file"
          name="profileImage"
          accept="image/*"
        />
          <textarea name="desc" id="desc" rows="16" placeholder="Description"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


export default AddproductPage

