import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import '../style/login.css'

export interface ILoginProps {}

const Login: FC<ILoginProps> = ({}) => {
  // const [msg, setMsg] = useState<string>('default msg: hellow world')
  // const [avatar, setAvatar] = useState<string>('')

  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  return (
    <div className="login">
      <div className="login_btn">
        <button>Click me to login Admin</button>

        <button>Click me to login Guest</button>
      </div>

      {/* <div className="login_img">
        <img style={{ display: avatar ? 'block' : 'none' }} src={avatar} />
      </div>

      <p className="login_content">{msg}</p> */}
    </div>
  )
}

export default Login
