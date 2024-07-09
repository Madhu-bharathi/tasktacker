import React from 'react'

const Option = ({SelectTag,TagName,selected}) => {

  const tagStyle={
     HTML:{backgroundColor:"red"},
     CSS:{backgroundColor:"green"},
     JS:{backgroundColor:"blue"},
     REACT:{backgroundColor:"violet"},
     Default:{backgroundColor:""},
  }
  return (
    <button className='tag' 
            type='button' 
            style= {selected ? tagStyle[TagName] :tagStyle.Default}
            onClick={()=> SelectTag(TagName)}>
            {TagName} </button>
  )
}

export default Option
