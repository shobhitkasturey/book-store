import React from 'react'
import { Label, Select, TextInput, Textarea, Button } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL, category,bookDescription, bookPDFURL} = useLoaderData()
  

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help books",
    "Memoir",
    "Business books",
    "Children books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [SelectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    
    //update book data
     fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(updatebookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book Updated successfully!!")
    })

  }

  return (

    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form  onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle"
              name='bookTitle'
              type="text" 
              placeholder="Book name"
              required 
              defaultValue={bookTitle}
              />
          </div>

          {/* authorname */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author name" />
            </div>
            <TextInput id="authorName"
              name='authorName'
              type="text" placeholder="Author name"
              required 
              defaultValue={authorName}
              />
          </div>
        </div>

        {/*second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput id="imageURL"
              name='imageURL'
              type="text" placeholder="Book image URL"
              required 
              defaultValue={imageURL}
              />
          </div>

          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={SelectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={Option}>{option}</option>)
              }
            </Select>

          </div>
        </div>

        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription"
            name='bookDescription'
            placeholder="Write your book description..."
            required
            className='w-full'
            rows={6}
            defaultValue={bookDescription} 
            />
        </div>
        {/*book pdf link */}

       <div>
          <div className="mb-2 block">
            <Label 
            htmlFor="bookPDFURL" 
            value="Book PDF URL" />
          </div>
          <TextInput 
          id="bookPDFURL"
          name='bookPDFURL' 
          type="text" 
          placeholder="book pdf url" 
          required 
          defaultValue={bookPDFURL}
          />
        </div>
       
       {/* <div>

       </div> */}
       <Button type="submit" className='mt-5'>
         Update Book
        </Button>

      </form>
    </div>
  )
}

export default EditBooks
