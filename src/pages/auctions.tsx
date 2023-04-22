import { useDebouncedValue } from '@mantine/hooks'
import { useState, useEffect } from 'react'
import { Box, Grid, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'

import Layout1 from '../components/Layout/Layout1'

const Auctions: NextPage = () => {
    const PAGE_SIZE = 15;
  var activeAuctions = [
    { 
        id: 1, 
        auction: 'fo.co.uk', 
        startPrice: '$1200', 
        bottomPrice: '$200', 
        currentPrice: '$600', 
        soldFor: '', 
        endedAt: '14/5/2023', 
        status: 'Active', 
        Approved: 'Yes'
    },
    { 
        id: 2, 
        auction: 'do.co.uk', 
        startPrice: '$2400', 
        bottomPrice: '$800', 
        currentPrice: '$200', 
        soldFor: '', 
        endedAt: '17/6/2023', 
        status: 'InActive', 
        Approved: 'No'
    },
    { 
        id: 3, 
        auction: 'sfadfo.co.uk', 
        startPrice: '$900', 
        bottomPrice: '$100', 
        currentPrice: '$800', 
        soldFor: '$800', 
        endedAt: '14/5/2023', 
        status: 'Completed', 
        Approved: 'Yes'
    }
  ];

  const initialRecords = activeAuctions.slice(0, 15);

  // Filter and Search
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [page, setPage] = useState(1);

  // Pagination
  const [records, setRecords] = useState(initialRecords);
  const [selectedRecords, setSelectedRecords] = useState<any>([]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(activeAuctions.slice(from, to));
  }, [page]);
  useEffect(() => {
    setRecords(
      initialRecords.filter(({ auction, startPrice, bottomPrice, currentPrice }) => {
        if (
          debouncedQuery !== '' &&
          !`${auction} ${startPrice} ${bottomPrice} ${currentPrice}`
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
    <Layout1>
      <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">My Auctions</h1>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Auction List</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className='mb-2'></div>
                    <Grid mx="0" align="center" justify='space-between'>
                        <Grid.Col xs={2} sm={3}>
                            <TextInput
                                placeholder="Search..."
                                icon={<FontAwesomeIcon icon={faSearch} size={'xs'} />}
                                value={query}
                                onChange={(e) => setQuery(e.currentTarget.value)}
                            />
                        </Grid.Col>
                        <button className="btn btn-danger btn-icon-split mr-2">
                            <span className="icon text-white-50">
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span className="text">Delete</span>
                        </button>
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
                                { accessor: 'id', title: '#'},
                                { accessor: 'auction', title: 'Auctions', width:'10rem'},
                                { accessor: 'startPrice', title: 'Start Price'},
                                { accessor: 'bottomPrice', title: 'Bottom Price'},
                                { accessor: 'currentPrice', title: 'Current Price'},
                                { accessor: 'soldFor', title: 'Sold For'},
                                { accessor: 'endedAt', title: 'Ended At', width:'10rem'},
                                { accessor: 'status', title: 'Status'},
                                { accessor: 'approved', title: 'Approved'},
                            ]}
                            records={records}
                            totalRecords={activeAuctions.length}
                            recordsPerPage={PAGE_SIZE}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            selectedRecords={selectedRecords}
                            onSelectedRecordsChange={setSelectedRecords}
                        />
                    </Box>
                    
                </div>
            </div>
        </div>

        </div>
    </Layout1>
  )
}

export default Auctions