import React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import '../../styles/style.css';

export const PaginationPage = ({ setPage }) => {
    const style = {
        background: "transparent",
        color: "white"
    }
    const windowWidth = window.innerWidth;

    const changePage = (item) => {
        setPage(item.page);
        return < PaginationItem sx={style} {...item} />
    }

    return (
        <div title="pagination-container" className="pagination-container">
            <Stack spacing={2}>
                <Pagination renderItem={(item) => changePage(item)} count={10} variant="text">
                </Pagination>
            </Stack>
        </div>
    );
}
