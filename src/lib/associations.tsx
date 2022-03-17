import { associations } from './words'
import classNames from 'classnames'

const containerClass = classNames('flex justify-center mb-16 pl-12')

const associationClass = classNames(
  'inline-block justify-center flex px-5 py-2.5 mr-12 rounded-lg text-base font-bold bg-slate-300 dark:bg-blue-900 dark:text-white'
)

export const Associations = () => {
  return (
    <div>
      <div className={containerClass}>
        {associations.map((association) => (
          <div key={association} className={associationClass}>
            {association}
          </div>
        ))}
      </div>
    </div>
  )
}
