// import React from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// const Write = () => {
//     const [value, setValue] = React.useState('');
//     return (
//         <div className='add'>
//             <div className="content">
//                 <input type="text" placeholder="Title" />
//                 <div className="editorContainer">
//                     <ReactQuill className="editor" value={value} theme="snow" onChange={setValue} />
//                 </div>
//             </div>
//             <div className="menu">
//                 <div className='item'>
//                     <h1>Publish</h1>
//                     <span>
//                         <b>Status: </b> Draft
//                     </span>
//                     <span>
//                         <b>Visibility: </b> Public
//                     </span>
//                     <input style={{ display: 'none' }} type='file' id='file'></input>
//                     <label htmlFor="file">Upload Image</label>
//                     <div className="buttons">
//                         <button>Save as a draft</button>
//                         <button>Update</button>
//                     </div>
//                 </div>
//                 <div className='item'>
//                     <h1>Category</h1>
//                     <input type="radio" name='cat' value="art" id='art' />
//                     <label htmlFor="art">Art</label>
//                     <input type="radio" name='cat' value="science" id='science' />
//                     <label htmlFor="science">Science</label>
//                     <input type="radio" name='cat' value="technology" id='technology' />
//                     <label htmlFor="technology">Technology</label>
//                     <input type="radio" name='cat' value="cinema" id='cinema' />
//                     <label htmlFor="cinema">Cinema</label>
//                     <input type="radio" name='cat' value="design" id='design' />
//                     <label htmlFor="design">Design</label>
//                     <input type="radio" name='cat' value="food" id='food' />
//                     <label htmlFor="food">Food</label>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Write

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = React.useState('');
    const [category, setCategory] = React.useState('');

    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editorContainer">
                    <ReactQuill className="editor" value={value} theme="snow" onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className='item'>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{ display: 'none' }} type='file' id='file' />
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className='item'>
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name='cat' value="art" id='art' checked={category === 'art'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name='cat' value="science" id='science' checked={category === 'science'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name='cat' value="technology" id='technology' checked={category === 'technology'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name='cat' value="cinema" id='cinema' checked={category === 'cinema'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name='cat' value="design" id='design' checked={category === 'design'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name='cat' value="food" id='food' checked={category === 'food'} onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
