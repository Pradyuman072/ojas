import { ccdata, finaldata, thirddata, seconddata, firstdata } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filterDataByYear = (data) => {
    if (selectedYear === "All") return data;
    return data.filter(item => item.year === parseInt(selectedYear));
  };

  return (
    <div className="circuit-background">
      <section className='agency bg-top'>
        <div className='container'>
          <div className='filter-container' style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <label htmlFor="year-filter" style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by Year: </label>
            <select
              id="year-filter"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                backgroundColor:"transparent",
                color:"white",
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.borderColor = '#007bff'} // Change border color on hover
              onMouseLeave={(e) => e.target.style.borderColor = '#ccc'} // Reset border color
            >
              <option value="All">All</option> 
              <option value="4">Final Year</option>
               <option value="3">Pre Final Year</option>  
               <option value="2">Second Year</option>
              <option value="1">First Year</option>           
            </select>
          </div>

          <div data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='heading-title'>
            <TitleSm className="text-6xl" title='MEET OUR TEAM' />
          </div>

          {selectedYear === "All" || selectedYear === "4" ? (
            <>
              <div data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='heading-title'>
                <Title title='Final Year' className='title-bg' />
              </div>
              <div className='grid-4 py'>
                {filterDataByYear(finaldata).map((item) => (
                  <Card data={item} key={item.id} caption={item.post} />
                ))}
              </div>
            </>
          ) : null}

          {selectedYear === "All" || selectedYear === "3" ? (
            <>
              <div data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='heading-title'>
                <Title title='Pre Final Year' className='title-bg' />
              </div>
              <div className='grid-4 py'>
                {filterDataByYear(thirddata).map((item) => (
                  <Card data={item} key={item.id} caption={item.post} />
                ))}
              </div>
            </>
          ) : null}

          {selectedYear === "All" || selectedYear === "2" ? (
            <>
              <div data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='heading-title'>
                <Title title='Second Year' className='title-bg' />
              </div>
              <div className='grid-4 py'>
                {filterDataByYear(seconddata).map((item) => (
                  <Card data={item} key={item.id} caption={item.post} />
                ))}
              </div>
            </>
          ) : null}

          {selectedYear === "All" || selectedYear === "1" ? (
            <>
              <div data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="1000" className='heading-title'>
                <Title title='First Year' className='title-bg' />
              </div>
              <div className='grid-4 py'>
                {filterDataByYear(firstdata).map((item) => (
                  <Card data={item} key={item.id} caption={item.post} />
                ))}
              </div>
            </>
          ) : null}

        </div>
      </section>
    </div>
  );
}

export default Team;