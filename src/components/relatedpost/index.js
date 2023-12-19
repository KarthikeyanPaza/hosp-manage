import { Row, Col, CardBody, CardImg, Card, Container, CardTitle } from 'reactstrap';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import port from '../../assets/image/avatar-1.png';
import port1 from '../../assets/image/avatar-2.png';
import port2 from '../../assets/image/avatar-3.png';
import port3 from '../../assets/image/avatar-4.png';
function Team() {
    const teamarr = [
        {
            id: 1,
            img: port,
            title: "Dr.Rajkumar",
            desc: 'Cardiologist'
        },
        {
            id: 2,
            img: port1,
            title: "Dr.Suresh Balaji",
            desc: 'nephrologist'
        },
        {
            id: 3,
            img: port2,
            title: "Dr.Vishnu prakash",
            desc: 'Endocrinologist'
        },
        {
            id: 4,
            img: port3,
            title: "Dr.Usha",
            desc: 'Gynecologists'
        },
        {
            id: 5,
            img: port1,
            title: "Dr.Gopinath",
            desc: 'Dermatologist'
        },
        {
            id: 6,
            img: port3,
            title: "Dr. Sasikala",
            desc: 'Gastroenterologist'
        },
    ]

    return (
        <div id='Specailist'>
            <section className='section'>
                <Container>
                    <Row>
                    <div class="py-5 text-center container">
                    <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">SPECAILIST DOCTORS</h1>
                    </div>
                    </div>

                        {teamarr && teamarr.length > 0 ? teamarr.map((element) => (
                            <Col lg='4' md='6' className='my-3' key={element.id}>
                                <Card className='team-section'>
                                    <CardImg
                                        alt="Card image cap"
                                        src={element.img}
                                        className='team-avatar'
                                    />
                                    <CardBody>
                                        <CardTitle tag='h5'>
                                            {element.title}
                                        </CardTitle>
                                        <p className='text-secondary'> {element.desc}</p>
                                        <div className="">
                                            < AiFillInstagram size='22' color='#3f729b' className='mx-2 my-2' />
                                            <AiFillFacebook size='22' color='#3b5998' className=' mx-2 my-2' />
                                            <AiFillTwitterCircle size='22' color='#55acee' className=' mx-2 my-2' />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                        )) : <>
                            <Col>
                                <Card className='text-center'>
                                    <CardBody>
                                        <CardTitle>No Cards Found!!</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        </>}
                    </Row>
                </Container>
            </section>
        </div>)
}
export default Team;