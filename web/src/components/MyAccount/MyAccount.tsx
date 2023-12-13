import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import AccountDetailsCell from 'src/components/AccountDetailsCell'

import Icon from '../Icon/Icon'

const MyAccount = ({ id }) => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  const toggleDropdown = () => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }
  console.log(id)

  return (
    <div className="relative dark:text-white">
      <button className="flex items-center gap-2" onClick={toggleDropdown}>
        <motion.div animate={{ rotate: isDropdownShowing ? 180 : 0 }}>
          <Icon id="chevron" />
        </motion.div>
        <AccountDetailsCell id={id} />
      </button>

      <AnimatePresence>
        {isDropdownShowing && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="dropdown inline-block bg-white py-5 pl-4 pr-5"
          >
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="user" />
                </div>
                My Account
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="calendar" />
                </div>
                My Event
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="logout" />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
