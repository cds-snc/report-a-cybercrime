import * as Yup from 'yup'

const suspectCluesFormSchema = Yup.object().shape({
  suspectClues1: Yup.string(),
  suspectClues2: Yup.string(),
  suspectClues3: Yup.string(),
})

export const SuspectCluesFormSchema = () => {
  return suspectCluesFormSchema
}
