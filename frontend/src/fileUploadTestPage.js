import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPLOAD_IMAGE = gql`
  mutation($image: Upload!) {
    uploadImage(image: $image)
  }
`

const handleChange = async (event, mutation) => {
  const {
    target: {
      validity,
      files: [image],
    },
  } = event

  if (validity.valid) {
    // Call graphql API
    const {
      data: { uploadImage },
    } = await mutation({
      mutation: UPLOAD_IMAGE,
      variables: { image },
      fetchPolicy: 'no-cache',
    })
    console.log(uploadImage)
  }
}

export const UploadImage = () => {
  return (
    <Mutation mutation={UPLOAD_IMAGE} fetchPolicy="no-cache">
      {(mutation, { loading }) => (
        <input
          type="file"
          required
          onChange={event => handleChange(event, mutation)}
        />
      )}
    </Mutation>
  )
}
