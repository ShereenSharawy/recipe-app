import React, { forwardRef, useState,useEffect } from "react";
import UploadAndDisplayImage from "./uploadanddisplayimage/uploadanddisplayimage";
import LoadingSpinner from "../loadingsnipper/loadingspinner";
const AddRecipePopover = forwardRef((props, ref) => {

    let originalInputs={
        recipetitle: "",
        recipeDescription: "",
        image: "",
        authorImage: "",
        formErrors: {recipetitle: '', recipeDescription: ''},
        recipetitleValid: false,
        recipeDescriptionValid: false,
        formValid: false
    };
    const [inputValues, setInputValue] = useState(originalInputs);
    let [isAddRecipeError, setAddRecipeError] = useState(false);
    let [isAddRecipeLoading, setAddRecipeLoading] = useState(false);
    let [isAddNewRecipeinfo, setAddNewRecipeinfo] = useState(false);
    let [clearImage, setClearImage] = useState(false);


    function handleChanges(e) {
        setAddNewRecipeinfo(false);
        const value =e.target.value;
        const name = e.target.name;
        setInputValue({ ...inputValues, [name]: value });
        checkValidation(name,value)

     }
     function checkValidation(fieldName,value){
         let formErrors = inputValues.formErrors;
         let recipetitleValid = inputValues.recipetitleValid;
         let recipeDescriptionValid = inputValues.recipeDescriptionValid;
         let formValid= inputValues.formValid;
         switch(fieldName) {
             case 'recipetitle':
               recipetitleValid = value.length > 0;
               formErrors.recipetitle = recipetitleValid ? '' : 'The title is required';
               break;
             case 'recipeDescription':
                 recipeDescriptionValid  = value.length > 0;
                 formErrors.recipeDescription = recipeDescriptionValid  ? '': 'The description is required';
               break;
             default:
               break;
           }
           setInputValue((inputValues)=>{
             return ({...inputValues, formErrors: formErrors,recipetitleValid:recipetitleValid, recipeDescriptionValid:recipeDescriptionValid,  formValid:recipetitleValid && recipeDescriptionValid})
          })
    
         }
     function recipeImageUploadHandler(selectedImage){
         inputValues.image =selectedImage;
     }
     function authorImageUploadHandler(selectedImage){
         inputValues.authorImage =selectedImage;
     }

    function recipeFromsubmitHandler(e) {
        e.preventDefault();
        postNewRecipe();    
    }

   const postNewRecipe = async () => {
        let newRecipe ={
            title:inputValues.recipetitle,
            image: inputValues.image,
            authorImg: inputValues.authorImage,
            description: inputValues.recipeDescription
        };
        if(newRecipe.authorImg ===""){
            newRecipe.authorImg ="images/topChiefs/default_person.png"
        }
        if(newRecipe.image ===""){
            newRecipe.image ="images/gallery/default_meal.jpg"
        }
        setAddRecipeLoading(true);
        let response = await fetch("http://localhost:5000/recipes", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
          }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
              throw new Error("Bad response from server");
            }
            return response;
        }).then((returnedResponse) => {
           setInputValue(originalInputs);
           setAddRecipeLoading(false);
           setAddNewRecipeinfo(true);
           setClearImage(true);
           props.updateRecipesList(newRecipe);
        }
           
        ).catch((error) => {
            setAddRecipeError(true);
            setAddRecipeLoading(false);
        });

    }

    return (
        <div className="py-2">
            <div className="modal" tabIndex="-1" ref={ref}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="recipeForm" onSubmit={recipeFromsubmitHandler}>
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Recipe</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="recipetitle">Recipe title</label>
                                    <input type="text" placeholder='Recipe title'  name="recipetitle" onChange={handleChanges} value={inputValues.recipetitle} required   onBlur={checkValidation} className={inputValues.formErrors && inputValues.formErrors.recipetitle? 'form-control is-invalid': 'form-control'}/>
                                    {inputValues.formErrors.recipetitle && <div className="invalid-feedback">{inputValues.formErrors.recipetitle}</div>}
                                </div>
                                <div className="form-group mt-10">
                                    <label htmlFor="recipeDescription">Recipe Description</label>
                                    <textarea id="recipeDescription" placeholder='Recipe Description'  name="recipeDescription" onChange={handleChanges} value={inputValues.recipeDescription} required onBlur={checkValidation} className={inputValues.formErrors && inputValues.formErrors.recipeDescription? 'form-control is-invalid': 'form-control'}/>
                                    {inputValues.formErrors.recipeDescription && <div className="invalid-feedback">{inputValues.formErrors.recipeDescription}</div>}
                                </div>
                                <div className="form-group mt-10">
                                <label>Recipe image</label>
                                 <UploadAndDisplayImage imageUpload={recipeImageUploadHandler} clearImg={isAddNewRecipeinfo}/>
                                </div>
                                <div className="form-group mt-10">
                                <label>Author image</label>
                                 <UploadAndDisplayImage imageUpload={authorImageUploadHandler} clearImg={clearImage}/>
                                </div>

                                {isAddRecipeError && <div className="alert alert-danger" role="alert">Error Has Happened whe reterive data </div>}
                            </div>
                            {isAddNewRecipeinfo && <div className="alert alert-info" role="alert">You can add an new recipe again!</div>}
                            <div className="modal-footer">
                            {isAddRecipeLoading && <LoadingSpinner/>}
                                <button type="submit" className="btn btn-primary p-2" disabled={!inputValues.formValid}>
                                    Add
                                </button>
                                <button type="button" className="btn btn-secondary p-2" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default AddRecipePopover;