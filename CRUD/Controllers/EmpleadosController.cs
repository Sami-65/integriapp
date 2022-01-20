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
    public class EmpleadosController : ControllerBase
    {
        private readonly BaseDBcontext _context;
        public EmpleadosController(BaseDBcontext context)
        {
            _context = context;
        }
        // GET: api/<EmpleadosController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaEmpleados = await _context.Empleados.ToListAsync();
                return Ok(listaEmpleados);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/<EmpleadosController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var empleado = await _context.Empleados.FindAsync(id);
                if (empleado == null)
                {
                    return NotFound();
                }
                return Ok(empleado);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST api/<EmpleadosController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Empleados empleado)
        {
            try
            {
                _context.Add(empleado);
                await _context.SaveChangesAsync();
                return Ok();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<EmpleadosController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Empleados empleado)
        {
            try
            {
                if (id != empleado.Id)
                {
                    return BadRequest();
                }
                _context.Update(empleado);
                await _context.SaveChangesAsync();
                return Ok(new { message = "sus datos se actualizo " });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/<EmpleadosController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var empleado = await _context.Empleados.FindAsync(id);
                if (empleado == null)
                {
                    return BadRequest();
                }
                _context.Empleados.Remove(empleado);
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