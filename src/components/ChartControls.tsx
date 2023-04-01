import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {  useDispatch } from 'react-redux'
import {  clearChart, resetChart  } from '../redux/chartSlice'
const ChartControls = () => {

    const dispatch = useDispatch()

    var handleClearChart= ()=>{
        dispatch(clearChart())
    }
    var handleResetChart= ()=>{
        dispatch(resetChart())
        
    }
    var downloadChart= ()=>{
        const svgElement = document.getElementById('chart');
        
        if(svgElement){
            const clonedSvg = svgElement.cloneNode(true);
            (clonedSvg as Element).setAttribute('height', '200vh');
            const svgData = new XMLSerializer().serializeToString(clonedSvg);
            const blob = new Blob([svgData], { type: 'image/svg+xml' });
            const blobUrl = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.setAttribute('href', blobUrl);
            downloadLink.setAttribute('download', 'AffiliateMarketing.svg');
            downloadLink.click();
        }
        
    }
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 gap-y-4 gap-x-4 py-8'>
        <div className="col-span-5 text-white">
            <h2 className='text-2xl font-medium uppercase'>Affiliate Marketing Flow Chart</h2>
            <p className='text-white text-sm text-justify font-p_font'>Customize and export  the flow Chart to fit your business needs!</p>
        </div>
        <div className='col-span-7 grid grid-cols-7 gap-x-4'>
            <div className="col-span-3">
                <button onClick={handleClearChart} className='bg-mine-secondary hover:bg-mine-primary hover:text-white text-black w-full py-3 rounded'>Clear Chart</button>
            </div>
            <div className="col-span-3">
                <button onClick={handleResetChart} className='border hover:border-mine-primary hover:text-mine-primary border-mine-secondary text-mine-secondary w-full py-3 rounded'>Reset Chart</button>

            </div>
            <div className="col-span-1">
                <button onClick={downloadChart} className='bg-mine-primary  hover:border hover:border-mine-primary hover:bg-transparent hover:text-mine-primary text-white w-full py-3 rounded'><FileDownloadOutlinedIcon /></button>
            </div>
        </div>


    </div>
  )
}

export default ChartControls