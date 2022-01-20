using CRUD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlmacenController : ControllerBase
    {
        private readonly BaseDBcontext _context;
        public AlmacenController(BaseDBcontext context)
        {
            _context = context;
        }
        // GET: api/<AlmacenController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaAlmacen = await _context.Almacen.ToListAsync();
                return Ok(listaAlmacen);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/<AlmacenController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var almacen = await _context.Almacen.FindAsync(id);
                if (almacen == null)
                {
                    return NotFound();
                }
                return Ok(almacen);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST api/<AlmacenController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Almacen almacen)
        {
            try
            {
                _context.Add(almacen);
                await _context.SaveChangesAsync();
                return Ok();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<AlmacenController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Almacen almacen)
        {
            try
            {
                if (id != almacen.Id)
                {
                    return BadRequest();
                }
                _context.Update(almacen);
                await _context.SaveChangesAsync();
                return Ok(new { message = "sus datos se actualizo " });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/<AlmacenController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var almacen = await _context.Almacen.FindAsync(id);
                if (almacen == null)
                {
                    return BadRequest();
                }
                _context.Almacen.Remove(almacen);
                await _context.SaveChangesAsync();
                return Ok(new { message = "sus datos se elimino" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
