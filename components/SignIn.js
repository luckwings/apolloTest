import FormStyles from './styles/FormStyles';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { gql, useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }

    }
  }
`;

export default function SignIn() {
const { inputs, handleChange, resetForm, clearForm } = useForm({
  email: '',
  password: '',
});
const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
  variables: inputs,
  // refetch the currently logged in user
  refetchQueries: [{ query: CURRENT_USER_QUERY }],
});

async function handleSubmit(e) {
  e.preventDefault();
  await signin();
  resetForm();

}
const error =
  data?.authenticateUserWithPassword.__typename ===
  'UserAuthenticationWithPasswordFailure'
    ? data?.authenticateUserWithPassword
    : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>
      <DisplayError error={error}/>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign In!</button>
      </fieldset>
    </FormStyles>
  );
}
