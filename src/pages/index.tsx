import { useDebouncedValue } from '@mantine/hooks'
import { useState, useEffect } from 'react'
import { Box, Grid, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faSearch } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout/Layout'

export default function Home() {
  const PAGE_SIZE = 15;
  var activeAuctions = [
    { id: 1, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 2, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 3, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 4, auction: 'Tiger Nixon', price: '$100', time: '23/4/2020' },
    { id: 5, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 6, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 7, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 8, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 9, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 10, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 11, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 12, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 13, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 14, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 15, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
    { id: 16, auction: 'Tiger Nixon', price: '$200', time: '23/4/2020' },
  ];

  const initialRecords = activeAuctions.slice(0, 15);

  // Filter and Search
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [page, setPage] = useState(1);

  // Pagination
  const [records, setRecords] = useState(initialRecords);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(activeAuctions.slice(from, to));
  }, [page]);
  useEffect(() => {
    setRecords(
      initialRecords.filter(({ auction, price }) => {
        if (
          debouncedQuery !== '' &&
          !`${auction} ${price}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  return (
    <Layout>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>
        <h4 className="mx-auto">Welcome To Our Store</h4>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Active Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                          </div>
                          <div className="col-auto">
                              <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                  Completed Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">155,000</div>
                          </div>
                          <div className="col-auto">
                              <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Future Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Active Auctions</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <Grid mx="0" align="center">
                <Grid.Col xs={2} sm={3}>
                  <TextInput
                    placeholder="Search..."
                    icon={<FontAwesomeIcon icon={faSearch} size={'xs'} />}
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                  />
                </Grid.Col>
              </Grid>
              <div className='mb-2'></div>
              <Box sx={{ height: 400 }}>
                <DataTable
                  withBorder
                  borderRadius="sm"
                  withColumnBorders
                  striped
                  highlightOnHover
                  columns={[
                    { accessor: 'id', title: '#', width: '20%'},
                    { accessor: 'auction', title: 'Active Auctions', width: '20%'},
                    { accessor: 'price', title: 'Current Price', width: '20%'},
                    { accessor: 'time', title: 'Time Out', width: '20%'},
                  ]}
                  records={records}
                  totalRecords={activeAuctions.length}
                  recordsPerPage={PAGE_SIZE}
                  page={page}
                  onPageChange={(p) => setPage(p)}
                />
              </Box>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Completed Auctions</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                <Grid mx="0" align="center">
                  <Grid.Col xs={2} sm={3}>
                    <TextInput
                      placeholder="Search..."
                      icon={<FontAwesomeIcon icon={faSearch} size={'xs'} />}
                      value={query}
                      onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                  </Grid.Col>
                </Grid>
                <div className='mb-2'></div>
                <Box sx={{ height: 400 }}>
                  <DataTable
                    withBorder
                    borderRadius="sm"
                    withColumnBorders
                    striped
                    highlightOnHover
                    columns={[
                      { accessor: 'id', title: '#', width: '20%'},
                      { accessor: 'auction', title: 'Active Auctions', width: '20%'},
                      { accessor: 'price', title: 'Current Price', width: '20%'},
                      { accessor: 'time', title: 'Time Out', width: '20%'},
                    ]}
                    records={records}
                    totalRecords={activeAuctions.length}
                    recordsPerPage={PAGE_SIZE}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                  />
                </Box>
              </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Future Auctions</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                <Grid mx="0" align="center">
                  <Grid.Col xs={2} sm={3}>
                    <TextInput
                      placeholder="Search..."
                      icon={<FontAwesomeIcon icon={faSearch} size={'xs'} />}
                      value={query}
                      onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                  </Grid.Col>
                </Grid>
                <div className='mb-2'></div>
                <Box sx={{ height: 400 }}>
                  <DataTable
                    withBorder
                    borderRadius="sm"
                    withColumnBorders
                    striped
                    highlightOnHover
                    columns={[
                      { accessor: 'id', title: '#', width: '20%'},
                      { accessor: 'auction', title: 'Active Auctions', width: '20%'},
                      { accessor: 'price', title: 'Current Price', width: '20%'},
                      { accessor: 'time', title: 'Time Out', width: '20%'},
                    ]}
                    records={records}
                    totalRecords={activeAuctions.length}
                    recordsPerPage={PAGE_SIZE}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                  />
                </Box>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
