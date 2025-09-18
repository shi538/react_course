
import { Logo, LogoutBtn, Container } from '../Index'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const authStatus = useSelector((state) => (state.auth.status))
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <div>
      <header>
        <Container className='py-3 shadow bg-gray-500'>
          <nav className='flex'>
            <div className='mr-4 my-2'>
              <Link to='/'>
                <Logo width='70px' />
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {
                navItems
                .map((item) => (
                  <li key={item.name}>
                    {item.active ? (
                      <button 
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}
                    </button>
                    ) :null}                   
                  </li>
                  
                ))              
              }
               {authStatus && (
                  <LogoutBtn/>
                )}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header;
