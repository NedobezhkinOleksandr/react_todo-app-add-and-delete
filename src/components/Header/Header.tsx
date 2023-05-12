import { Errors } from '../../types/Errors';

type Props = {
  hasSomeTodos: boolean,
  onChangeIsError: (e: Errors) => void,
  onSubmitAddTodo: (value: string) => void,
  onChangeTitle: (value: string) => void,
  titleTodo: string,
};

export const Header: React.FC<Props> = ({
  hasSomeTodos,
  onChangeIsError,
  onSubmitAddTodo,
  titleTodo,
  onChangeTitle,
}) => {
  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      onSubmitAddTodo(titleTodo);
    } catch {
      onChangeIsError(Errors.ADD);
    }
  };

  return (
    <header className="todoapp__header">
      {hasSomeTodos && (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className="todoapp__toggle-all active" />
      )}

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={titleTodo}
          onChange={(e) => (onChangeTitle(e.target.value.trimStart()))}
        />
      </form>
    </header>
  );
};