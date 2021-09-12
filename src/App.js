import { Component } from "react";
import "./css/bootstrap.min.css"
import { Container, Nav, Navbar, Form, FormControl, Button, NavDropdown, Breadcrumb, Alert, Spinner, Tab, Tabs, Table, ProgressBar, Pagination, Popover, OverlayTrigger, Collapse } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: false
    }
  }
  render() {
    const popover = (
      <Popover>
        <Popover.Title as='h6'><strong>Informasi Website</strong></Popover.Title>
        <Popover.Content>
          Website ini di buat untuk memudahakan dalam pencarian informasi terkini tentang Berita olahraga
        </Popover.Content>
      </Popover>
    )
    return (
      <div>
        <Navbar bg="dark" className="px-2" variant='dark' expand='lg'>
          <Navbar.Brand href='#'>Akses Sport</Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Berita</Nav.Link>
            <Nav.Link href="#">Live Score</Nav.Link>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item>Internasional</NavDropdown.Item>
              <NavDropdown.Item>Klub</NavDropdown.Item>
              <NavDropdown.Item>Lokal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Transfer Pemain</Nav.Link>
            <Nav.Link href='#'>Tim</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>


          <Alert variant='dark' className="pt-1 pb-0 ms-auto" style={{ width: "30%" }}>
            <Breadcrumb bg="dark">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href='#'>Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href='#' active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Alert>

          <div className="d-flex mt-5">
            <h4><strong>Rumor Transfer Pemain</strong></h4>
            <div className="ms-auto">
              <Spinner animation="border" variant='success' />
              <Spinner className='mb-2 ms-1' animation='grow' size='sm' variant='success' />
            </div>
          </div>

          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="my-3"
          >
            <Tab eventKey='home' title='Semua Transfer'>
              <Table >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={80} label="80%" /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td><ProgressBar animated now={55} label="55%" /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td><ProgressBar animated now={95} label="95%" /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETERSBURG</td>
                    <td><ProgressBar animated now={100} label="100%" /></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PLACE</td>
                    <td><ProgressBar animated now={50} label="50%" /></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PIAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td><ProgressBar animated now={100} label="100%" /></td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey='liga-premier-inggris' title='Liga Premier Inggris'></Tab>
            <Tab eventKey='Serie-A' title='Serie A'></Tab>
            <Tab eventKey='Divisi-Primera' title='Divisi Serie A'></Tab>
            <Tab eventKey='Bundesliga' title='Dundesliga'></Tab>
            <Tab eventKey='Liga-1-Indonesia' title="Liga 1 Indonesia"></Tab>

          </Tabs>

          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <OverlayTrigger
            trigger='click'
            placement='right'
            overlay={popover}
          >
            <Button variant='primary'>Informasi</Button>
          </OverlayTrigger>
          <Button variant='primary' onClick={() => this.setState({ view: true })} className="ms-1">Versi Website</Button>
          <Collapse in={this.state.view}>
            <p style={{ marginLeft: '6em' }}>Akses Sport V1.0</p>
          </Collapse>
        </Container>
      </div >

    )
  }
}
export default App