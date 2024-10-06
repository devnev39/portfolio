import { Avatar, Flex, Heading } from "@/once-ui/components";
import { Rating } from 'react-simple-star-rating'

interface FeedbackCardProps {
    avatar: string;
    name: string;
    email: string;
    rating: number;
    projectName: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ avatar, name, email, rating, projectName }) => {
    return (
        <>
        <Flex style={{minWidth: "0", flex: "0 0 5%", marginRight: "1rem", marginLeft: "1rem"}} gap="s" onBackground="brand-strong" background="brand-medium" radius="l" border="brand-medium" borderStyle="solid-1" padding="s">
            <Flex>
                <Avatar src={avatar} />
            </Flex>
            <Flex style={{width: "100%"}}>
                <Flex direction="column">
                    <Heading as="h3" variant="body-strong-xl" padding="0">
                        {projectName}
                    </Heading>
                    <Heading as="h4">
                        {name}
                    </Heading>
                    <Rating initialValue={rating} size={20} readonly />
                </Flex>
                <Flex direction="column">
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}