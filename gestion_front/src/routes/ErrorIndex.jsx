import Card from "../components/UI/Card";

function ErrorIndex() {
    return (
        <Card isError={true}>
            Oups, il y a eu une erreur!
        </Card>
    );
}

export default ErrorIndex;
