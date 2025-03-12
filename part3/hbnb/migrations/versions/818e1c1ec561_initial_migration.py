"""Initial migration

Revision ID: 818e1c1ec561
Revises: 
Create Date: 2025-03-11 14:15:13.758453

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '818e1c1ec561'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_admin', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_admin')

    # ### end Alembic commands ###
