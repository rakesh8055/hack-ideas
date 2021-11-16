import Modal from '../../common/modal/Modal';
import { DEFAULT_TAGS } from '../../../data/data';
import { useState } from 'react';
import Select from 'react-select';
import { useForm } from './useForm';
import { db } from '../../../firebase/firebase.utils';
import { collection, addDoc, getDocs } from '@firebase/firestore';

const Addevent = (props) => {
    const [tags, setTags] = useState([]);
    const [values, handleChange] = useForm({title: '', description: ''});

    const handleOnChange = (e) => {
        setTags(e ? e.map((tag) => tag.label) : []);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let tmpDate = new Date();
        let currentDate = tmpDate.getFullYear().toString() + '-' + tmpDate.getMonth().toString()+'-' + tmpDate.getDate().toString();

        console.log({...values, tags: tags, likes: 0, creationDate: currentDate})
        try {
            const docRef = await addDoc(collection(db, 'ideas'), 
               {...values, tags: tags, likes: 0, creationDate: currentDate}
            );
            console.log(docRef.id);
            props.getEvents();
        }catch(e) {
            console.log('Error adding doc: ', e);
        }
    }

    return(
        <Modal modalId={'events-modal'}
            title={'Add Ideas/Challenge'}
            isFooter={false}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input data-testid='title' type="text" name='title' onChange={handleChange} value={values.title} className="form-control" id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea data-testid='description' className="form-control" name='description' value={values.description} onChange={handleChange} id="description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <Select isMulti options={DEFAULT_TAGS} 
                    onChange={handleOnChange}></Select>
                </div>
                <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#events-modal">Submit</button>
            </form>
        </Modal>
    )
}
export default Addevent;