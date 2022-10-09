import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { RecipeContext } from 'app/contexts/RecipeContext';
import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';
import { TextArea } from 'ui/TextArea/TextArea';
import { Input } from 'ui/Input/Input';

export const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);
  const ingredientRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescrption] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid === true) {
      recipeContext?.addRecipe(title, description, ingredientsList);
      navigate('/');
    }
  };

  const handleIngredientButton = () => {
    if (ingredient !== '') {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient((prev) => (prev = ''));
      if (ingredientRef !== null) {
        ingredientRef.current!.value = '';
      }
    }
  };

  const handleDeleteIngredient = (e: React.MouseEvent<HTMLSpanElement>, item: string) => {
    e.stopPropagation();
    setIngredientsList((ingredientsList) => ingredientsList.filter((ingredient) => ingredient !== item));
  };

  useEffect(() => {
    if (title !== '' && description !== '' && ingredientsList.length !== 0) {
      setValid((prev) => (prev = true));
    }
    setValid((prev) => (prev = false));
  }, [title, description, ingredient, ingredientsList, valid]);

  return (
    <form onSubmit={handleSubmit} className={styles.creatorForm}>
      <Input
        htmlFor="Title"
        className={clsx(title === '' && styles.inputInvalid)}
        type="text"
        placeHolder="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle((prev) => (prev = e.target.value));
        }}
      />
      {title === '' && <p className={styles.errorMessage}>Title cannot be empty</p>}
      <TextArea
        htmlFor="Recipe Description"
        className={clsx(description === '' && styles.inputInvalid)}
        placeHolder="Recipe Description"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setDescrption((prev) => (prev = e.target.value));
        }}
      />
      {description === '' && <p className={styles.errorMessage}>Description cannot be empty</p>}
      <div className={styles.ingredientsContainer}>
        {ingredientsList.length === 0 && (
          <span className={styles.errorMessage}>Use input below to add some ingredients</span>
        )}
        <p>Ingredients:</p>
        <ul>
          {ingredientsList.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span
                  onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                    handleDeleteIngredient(e, item);
                  }}
                  className={styles.ingredientDelete}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
        <div className={styles.ingredientsContainer}>
          <Input
            htmlFor="Ingredient"
            className=""
            type="text"
            placeHolder="Add New Ingredient"
            innerRef={ingredientRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setIngredient((prev) => (prev = e.target.value));
            }}
          />
          <Button className={styles.returnButton} children="Add Ingredient" onClick={handleIngredientButton} />
        </div>
      </div>
      <button className={styles.submitButton}>Add Recipe</button>
    </form>
  );
};
