import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { MAX_CHALLENGES } from '../../constants/settings'
import { INFO_MODAL_TEXT } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title={INFO_MODAL_TEXT}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Welcome to RATle - pronounced as "rattle" - a variation of Wordle, where
        you are given 3 words associated in some way to the answer. Try to guess
        the word in {MAX_CHALLENGES} tries. After each guess, the color of the
        tiles will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <div className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <p>Inspired by Martha Mednick's Remote Associates Test. </p>

        <p>
          Data used:{' '}
          <a
            href="https://www.remote-associates-test.com/"
            className="underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            RAT
          </a>{' '}
        </p>

        <p>
          Forked from:{' '}
          <a
            href="https://github.com/cwackerfuss/react-wordle"
            className="underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Reactle
          </a>{' '}
        </p>

        <p>
          Source code:{' '}
          <a
            href="https://github.com/ShakhSaidov/RATle"
            className="underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            RATle
          </a>{' '}
        </p>
      </div>
    </BaseModal>
  )
}
