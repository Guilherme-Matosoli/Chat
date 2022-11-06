import { Container } from './styles';

type MessageType = {
    author: string,
    message: string
}

export const Messages: React.FC<MessageType> = ({
    author,
    message
}) => {
    return(
        <Container>
            <strong className='author'>{author}</strong>

            <div className="messagearea">
                <p>
                    {message}
                </p>
            </div>
        </Container>
    )
}