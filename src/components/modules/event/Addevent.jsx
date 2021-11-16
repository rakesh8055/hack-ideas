import Modal from '../../common/modal/Modal';
import { DEFAULT_TAGS } from '../../../data/data';
import { useState } from 'react';
import Select from 'react-select';
import { useForm } from './useForm';

const Addevent = () => {
    const [tags, setTags] = useState([]);
    const [values, handleChange] = useForm({title: '', description: ''});

    const handleOnChange = (e) => {
        setTags(e ? e.map((tag) => tag.label) : []);
    }

    const handleSubmit = (e) => {
        console.log(e.preventDefault());
        console.log(tags, values);
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal>
    )
}
export default Addevent;