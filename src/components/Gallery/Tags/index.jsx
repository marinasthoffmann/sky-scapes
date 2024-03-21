import styled from 'styled-components'
import tags from './tags.json'

const TagContainer = styled.div`
    display: flex;
    margin-block: 66px 48px;
    gap: 48px;
`

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <TagContainer>
            <TagTitle>Search by tag:</TagTitle>
            {tags.map(tag => <TagButton key={tag.id}>{tag.title}</TagButton>)}
        </TagContainer>        
    )
}

export default Tags