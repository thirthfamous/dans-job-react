// src/store/slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getJobs } from '../api/jobApi'
import { Job } from '../types/job'
import { Meta } from '../types/meta'


interface JobsState {
  loading: boolean
  data: Job[]
  meta: Meta
  error: string | null
}

const initialState: JobsState = {
  loading: false,
  data: [],
  error: null,
  meta: {
    page: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0
  }
}

const jobSlice = createSlice({
  name: 'Jobs',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setData: (state, action: PayloadAction<Job[]>) => {
      state.data = action.payload
    },
    addData: (state, action: PayloadAction<Job[]>) => {
      state.data = [...state.data, ...action.payload];
    },
    setMeta: (state, action: PayloadAction<Meta>) => {
      state.meta = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setLoading, setData, setError, addData } = jobSlice.actions

export const fetchJobs = (
  description?: string, 
  location?: string, 
  full_time: boolean = false, 
  page: number = 1,
  loadMore: boolean = false
) => async (dispatch: any) => {
  dispatch(setLoading(true))
  try {
    const res = await getJobs(description, location, full_time, page)
    if (loadMore) {
      dispatch(addData(res.jobs))
    } else {
      dispatch(setData(res.jobs))
    }
  } catch (error) {
    dispatch(setError("error"))
  }
  dispatch(setLoading(false))
}


export default jobSlice.reducer